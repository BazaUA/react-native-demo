import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonFilter = props => {
    const {
        actions,
        filter,
        children,
        txtStyle,
        activeOpacity,
        visibilityFilter,
        activeStyle,
        unactiveStyle
    } = props;

    const activeOrNot = (filter === visibilityFilter) ? activeStyle : unactiveStyle;
    const oonPress = () => actions.setVisibilityFilter(filter);

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity} style={activeOrNot} onPress={oonPress}
        >
            <Text style={txtStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonFilter;
