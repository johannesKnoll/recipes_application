import React, { PureComponent } from 'react';
import { View, Image, Text, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            favorite: false
        };
    }

    componentWillMount() {
        const { title, image, favorite } = this.props;
        this.setState({ title, image, favorite });
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    render() {
        const { title, image, favorite } = this.state;

        return (
            <View style={{  flex: 1,
              marginLeft: -10,
              padding: 0,
              backgroundColor: 'white', }}>
                <Text style={{  flex: 1,
                      marginLeft: -10,
                      padding: 0,
                      backgroundColor: 'white', }}>
                    {title}
                </Text>
                <Image
                    source={image}
                    style={{   flex: 1,
                      marginLeft: -10,
                      padding: 0,
                      backgroundColor: 'white', }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name={favorite ? 'heart' : 'heart-o'}
                        color={favorite ? '#F44336' : 'rgb(50, 50, 50)'}
                        size={30}
                        style={{ marginBottom: 10, marginTop: 20 }}
                        onPress={() => this.setState({ favorite: !favorite })}
                    />
                    <Text style={{  flex: 1,
                      marginLeft: -10,
                      padding: 0,
                      backgroundColor: 'white', }}>
                        {favorite ? 'Remove from favorite' : 'Add to favorite'}
                    </Text>
                </View>
            </View>
        );
    }
}

export default Product