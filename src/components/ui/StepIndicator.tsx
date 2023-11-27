import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import React, { FC } from 'react';

import { assetsImages, fontFamily, lightMode as palette } from '@assos/styles';

export interface Step {
  id: number;
  name: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;

  // Styles
  styleContainer?: StyleProp<ViewStyle>;
  styleActive?: StyleProp<ViewStyle>;
  styleComplete?: StyleProp<ViewStyle>;
  styleIncomplete?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  activeTitleStyles?: StyleProp<TextStyle>;

  // Renders
  renderComplete?: JSX.Element;
  renderActive?: JSX.Element;
  renderIncomplete?: JSX.Element;
}

const styles = StyleSheet.create({
  stepIndicatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40
  },
  indicatorWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  indicatorTitle: {
    position: 'absolute',
    fontFamily,
    top: '100%',
    fontWeight: '400',
    color: palette.textSecondary,
    fontSize: 13,
    letterSpacing: 0.5
  },
  complete: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: palette.buttonPrimary,
    backgroundColor: palette.systemBackgroundPrimary
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: palette.separatorPrimary
  },
  lineActive: {
    backgroundColor: palette.fieldActiveStroke
  },
  active: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: palette.systemBackgroundPopover,
    borderRadius: 50
  },
  activeNumber: {
    fontFamily,
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
    color: palette.textButtonLabelPrimary
  },
  incompleteCircle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  },
  incomplete: {
    width: 11,
    height: 11,
    borderRadius: 50,
    backgroundColor: palette.buttonInactive,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrap: {
    position: 'relative',
    display: 'flex'
  },
  activeTitleStyles: {
    fontWeight: '600',
    color: palette.textPrimary
  }
});

const StepIndicator: FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  styleContainer,
  styleText,
  styleActive,
  styleComplete,
  styleIncomplete,
  renderComplete,
  renderActive,
  renderIncomplete,
  activeTitleStyles
}) => {
  const ownRenderComplete = (): JSX.Element => {
    if (!!renderComplete) {
      return renderComplete;
    }

    return (
      <View style={[styles.complete, styleComplete]}>
        <Image source={assetsImages.check} />
      </View>
    );
  };

  const ownRenderActive = (step: Step): JSX.Element => {
    if (!!renderActive) {
      return renderActive;
    }

    return (
      <View style={[styles.active, styleActive]}>
        <Text style={styles.activeNumber}>{step.id}</Text>
      </View>
    );
  };

  const ownRenderIncomplete = (): JSX.Element => {
    if (!!renderIncomplete) {
      return renderIncomplete;
    }

    return (
      <View style={[styles.incompleteCircle]}>
        <View style={[styles.incomplete, styleIncomplete]} />
      </View>
    );
  };

  const renderStepIndicator = (
    step: Step,
    index: number
  ): JSX.Element => {
    const isActive = index === currentStep;
    const isComplete = index < currentStep;
    const isIncomplete = index > currentStep;
    const isLast = index === steps.length - 1;

    return (
      <>
        <View key={index} style={[styles.indicatorWrap]}>
          <View style={styles.wrap}>
            {isComplete && ownRenderComplete()}
            {isActive && ownRenderActive(step)}
            {isIncomplete && ownRenderIncomplete()}
          </View>
          <Text
            style={[
              styles.indicatorTitle,
              styleText,
              isActive && styles.activeTitleStyles,
              isActive && activeTitleStyles
            ]}
          >
            {step.name}
          </Text>
        </View>
        {!isLast && (
          <View style={[styles.line, isComplete && styles.lineActive]} />
        )}
      </>
    );
  };

  return (
    <View style={styleContainer}>
      <View style={styles.stepIndicatorContainer}>
        {steps.map(renderStepIndicator)}
      </View>
    </View>
  );
};

export default StepIndicator;
