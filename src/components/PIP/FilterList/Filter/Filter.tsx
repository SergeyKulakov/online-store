import React, { PureComponent } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SelectableRow } from '../SelectableRow';
import FSI18n, { translationKeys } from '@brandingbrand/fsi18n';
import {i18n, keys} from '@assos/lib';
import ModalHeader from '@assos/components/ui/ModalHeader';
import {FilterProps} from './Filter.types';
import {S} from './Filter.styles';
import {assetsImages} from '@assos/styles';
import { FilterOption, FilterValue } from '../../Hooks/useFilterOptions';

const componentTranslationKeys = translationKeys.flagship.filterListDefaults;

interface SelectedFilters {
  [key: string]: string[];
}
export interface FilterState {
  filters: SelectedFilters;
  activeSectionCode: string;
}

export class Filter extends PureComponent<
  FilterProps,
  FilterState
> {
  constructor(props: FilterProps) {
    super(props);
    this.state = {
      filters: {},
      activeSectionCode: ''
    };
  }
  componentDidMount(): void {
    if (this.props.selectedItems) {
      this.setState({filters: this.props.selectedItems});
    }
  }


  handleSelect = (value: string) => () => {
    this.setState(prevState => this.toggleFilters(prevState, value));
  }

  toggleFilters = (prevState: FilterState, value: string): Pick<FilterState, keyof FilterState> => {
    const {activeSectionCode, filters} = prevState;
    if (!activeSectionCode) { return prevState; }
    const activeSectionFilters = filters[activeSectionCode] || [];
    if (!activeSectionFilters.includes(value)) {
      return {
        ...prevState,
        filters: {...prevState.filters, [activeSectionCode]: [...activeSectionFilters, value]}
      };
    } else {
      const removed = activeSectionFilters.filter(v => v !== value);
      return {
        ...prevState,
        filters: {...prevState.filters, [activeSectionCode]: removed}
      };
    }
  }

  renderFilterItemValue = ({
    item,
    index
  }: Omit<ListRenderItemInfo<FilterValue>, 'separators'>): JSX.Element => {
    const selected = this.state.filters[this.state.activeSectionCode]?.includes(item.value);

    return (
      <SelectableRow
        key={index}
        title={item.value}
        selected={selected}
        onPress={this.handleSelect(item.value)}
        {...this.props.selectableRowProps}
      />
    );
  }

  // tslint:disable cyclomatic-complexity
  renderFilterItem = (
    { item, index }: Omit<ListRenderItemInfo<FilterOption>, 'separators'>,
    skipCustomRender: boolean = false
  ): JSX.Element => {
    const selectedValues = this.state.filters[item.code] || [];

    return (
      <TouchableOpacity
        style={[S.firstLevelItemContainer, this.props.itemStyle]}
        onPress={this.drilldown(item)}
        accessibilityRole={'button'}
        accessibilityHint={FSI18n.string(componentTranslationKeys.hintToggle)}
        accessibilityLabel={item.label}
        key={item.code}
      >
        <View>
          <Text
            style={[
              S.title,
              this.props.itemTextStyle,
              (this.props.ignoreActiveStyleIds || []).indexOf(item.code) === -1 &&
                selectedValues.length ? this.props.itemTextSelectedStyle : false
            ]}
          >
            {item.label}
          </Text>
          {(selectedValues.length || this.props.showUnselected) ? (
            <Text
              style={[
                S.selectedValueStyle,
                this.props.selectedValueStyle
              ]}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {selectedValues.join(', ')}
            </Text>
          ) : null}
        </View>
        <View style={[S.arrow, S.arrowNext]} />
      </TouchableOpacity>
    );
  }

  handleApply = () => {
    this.props.onApply(this.state.filters, { isButtonPress: true });
  }

  handleReset = () => {
    this.setState({ filters: {} });
  }

  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  drilldown = (item: FilterOption) => () => {
    this.setState({
      activeSectionCode: item.code
    });
  }

  backToFirstLevel = () => {
    this.setState({
      activeSectionCode: ''
    });
  }

  getKey = (item: any, index: number) => {
    return index.toString();
  }

  renderEmptyCell = () => {
    return (
      <View style={[S.emptyCell, this.props.optionsFooterStyles]}/>
    );
  }

  renderSecondLevel = (): JSX.Element => {
    // if (this.props.renderSecondLevel && !skipCustomRender) {
    //   return this.props.renderSecondLevel(
    //     item,
    //     this.backToFirstLevel,
    //     this.renderSecondLevel
    //   );
    // }
    const activeSectionCodeOption =
      this.props.items.find(item => item.code === this.state.activeSectionCode);

    return (
      <View style={S.applyButton}>
        <FlatList
          keyExtractor={this.getKey}
          data={activeSectionCodeOption?.values || []}
          renderItem={this.renderFilterItemValue}
          extraData={this.state}
          ListFooterComponent={this.props.secondLevelShowApply ? this.renderEmptyCell : undefined}
        />
      </View>
    );
  }


  render(): React.ReactNode {
    const {activeSectionCode} = this.state;
    const title = !!activeSectionCode &&
      this.props.items.find(item => item.code === activeSectionCode)?.label ||
      i18n.string(keys.pip.sortAndFilter.filter);
    return (
      <View style={[S.container, this.props.style]}>
        <ModalHeader
          title={title}
          onClose={this.props.reject}
          containerStyle={S.headerContainer}
          titleStyle={S.headerTitleStyles}
          backButton={!!this.state.activeSectionCode}
          onBack={this.backToFirstLevel}
          arrowIcon={assetsImages.filterBack}
        />
        <View
          style={{
            flex: 1,
            display: this.state.activeSectionCode ? 'none' : 'flex'
          }}
        >
          <FlatList
            data={this.props.items}
            renderItem={this.renderFilterItem}
            extraData={this.state.filters}
            ListFooterComponent={this.props.onClose ? this.renderEmptyCell : undefined}
          />
        </View>

        <View style={S.ctaContainer}>
            {!this.state.activeSectionCode && (
            <TouchableOpacity
              style={S.floatCancelButton}
              onPress={this.props.reject}
              accessibilityRole={'button'}
              accessibilityLabel={i18n.string(keys.flagship.filterListDefaults.cancel)}
            >
              <Text style={[S.floatCancelButtonText, this.props.cancelButtonTextStyle]}>
                {i18n.string(keys.flagship.filterListDefaults.cancel)}
              </Text>
            </TouchableOpacity>
            )
            }

          {
            !!this.state.activeSectionCode &&
            (
              <TouchableOpacity
                style={S.floatApplyButton}
                onPress={this.handleApply}
                accessibilityRole={'button'}
                accessibilityLabel={FSI18n.string(componentTranslationKeys.apply)}
              >
                <Text style={S.floatApplyButtonText}>
                  {FSI18n.string(componentTranslationKeys.apply)}
                </Text>
              </TouchableOpacity>
            )
          }
        </View>

        {!!this.state.activeSectionCode &&
          this.renderSecondLevel()}
      </View>
    );
  }
}
