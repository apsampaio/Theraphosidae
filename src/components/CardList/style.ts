import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const style = StyleSheet.create({
    container: {
        paddingBottom: 32,
    },
    
    title: {
        color: colors.title,
        fontSize: 16,
        lineHeight: 19,

        marginLeft: 32,
        marginBottom: -8,
    }

});

export default style;