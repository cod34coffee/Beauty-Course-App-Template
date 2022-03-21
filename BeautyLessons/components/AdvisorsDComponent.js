import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function AdvisorsD(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/react-lake.jpg')}}
            />
        );
    };

    return (
        <FlatList
            data={props.advisors}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default AdvisorsD;