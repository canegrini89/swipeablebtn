import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import Swipeout from 'react-native-swipeout'
import styles from './styles'

export default class FlatListItem extends Component {
  constructor(props) {
      super(props)
      this.state = {
          activeRowKey: null
      }
  }

  render() {
    const swipeSettings = {
      onOpen: () => {
        this.setState({ activeRowKey: this.props.item.id })
      },
        right: [
          {
            onPress: () => {
              Alert.alert(
                'Alert',
                'Are you sure you want to delete ?',
              [
                {text: 'No', onPress: () => {
                  // here put functionality
                }},
                {text: 'Yes', onPress: () => {
                  // here put functionality
                }}
              ],
                {cancelable: true}
              )
            },
              text: 'Delete', color: 'black'
          },
            {
              onPress: () => {
                Alert.alert(
                  'Alert',
                  'Are you sure you want to delete ?',
                  [
                    {text: 'No', onPress: () => {
                      // here put functionality
                    }},
                    {text: 'Yes', onPress: () => {
                      // here put functionality
                    }}
                  ],
                    {cancelable: true}
                )
              },
              text: 'Share', color: 'black'
            },
            {
              onPress: () => {
                Alert.alert(
                  'Alert',
                  'Are you sure you want to delete ?',
                  [
                    {text: 'No', onPress: () => {
                        // here put functionality
                    }},
                    {text: 'Yes', onPress: () => {
                        // here put functionality                                    
                    }}
                  ],
                    {cancelable: true}
                )
              },
                text: 'Add', color: 'black'
            },
            {
              onPress: () => {
                Alert.alert(
                  'Alert',
                  'Are you sure you want to delete ?',
                    [
                      {text: 'No', onPress: () => {
                          // here put functionality
                      }},
                      {text: 'Yes', onPress: () => {
                          // here put functionality
                      }}
                    ],
                      {cancelable: true}
                    )
                },
              text: 'Remove', color: 'black'
            }
          ],
      rowId: this.props.index,
      sectionId: 1,
    }

      return (
          <Swipeout {...swipeSettings}>
            <View style={styles.viewStyles}>
              {/* here I use style inline, because I need to use some logicz  */}
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: this.props.index % 2 == 0 ? 'red' : 'green' }}>
                  <Image
                    source={{ uri: this.props.item.imageUrl }}
                    style={styles.imageStyles}
                  >
                  </Image>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                      <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                      <Text style={styles.flatListItem}>{this.props.item.age}{' Years'}</Text>
                    </View>
                </View>
            </View>
          </Swipeout>
      )
  }
}

