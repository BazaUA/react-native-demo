import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonFilter = props => {
    const {
        filter,
        children,
        txtStyle,
        activeOpacity,
        visibilityFilter,
        activeStyle,
        unactiveStyle
    } = props;

    const activeOrNot = (filter === visibilityFilter) ? activeStyle : unactiveStyle;
    // const _onPress = () => actions.setVisibilityFilter(filter);

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={activeOrNot} //onPress={_onPress}
        >
            <Text style={txtStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export default ButtonFilter;
