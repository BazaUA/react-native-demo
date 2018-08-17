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
        unactiveStyle,
        setVisibilityFilter
    } = props;

    const activeOrNot = (props.filter === visibilityFilter) ? activeStyle : unactiveStyle;
    const oonPress = () => {
        setVisibilityFilter(filter);
    };

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
