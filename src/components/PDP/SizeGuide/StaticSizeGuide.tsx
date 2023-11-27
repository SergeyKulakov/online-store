import React, {useEffect, useState} from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { magento } from '@assos/datasources';
import RenderHTML from 'react-native-render-html';
import { fontFamily } from '@assos/styles';

interface StaticSizeGuideProps {
  product: ProductControllersTypes.Product;
}


const StaticSizeGuide = ({product}: StaticSizeGuideProps) => {
  const [content, setContent] = useState<string>();
  const findAndSetContent = (res: any[]) => {
    const entry = res.find(e => e);
    if (entry && entry?.content) {
      const sanitized = entry.content.replace(/&gt;/gm, '>')
        .replace(/&lt;/gm, '<').replace(/nbsp;/gm, ' ')
        .replace(/\&.*?\;/gm, '')
        .replace(/\{{.*?\}}/gm, '').replace(/border-width: 1px/gm, '');
      setContent(sanitized);
    }
  };
  useEffect(() => {
    const sizeGuidId = product?.attributes?.id_size_guide.value;
    if (sizeGuidId) {
      magento.fetchStaticSizeChart(sizeGuidId).then(findAndSetContent).catch();
    }
  }, []);
  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      {!!content && (
        <RenderHTML
          contentWidth={Dimensions.get('screen').width}
          source={{html: content}}
          htmlParserOptions={{xmlMode: true}}
          ignoredDomTags={['style', 'input']}
          systemFonts={[fontFamily]}
        />
      )}
    </ScrollView>
  );
};

export default StaticSizeGuide;
