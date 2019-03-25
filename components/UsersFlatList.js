import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import UsersListData from '../data/UsersListData'
import FlatListItem from './FlatListItem'

export default class UsersFlatList extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={UsersListData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index}>
                            </FlatListItem>
                        )
                    }}
                >
                </FlatList>
            </View>
        )
    }
}