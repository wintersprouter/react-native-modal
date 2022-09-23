import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useRef } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetRefProps } from './components/BottomSheet'

export default function App() {
  const ref = useRef<BottomSheetRefProps>(null)

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive()
    if (isActive) {
      ref?.current?.scrollTo(0)
    } else {
      ref?.current?.scrollTo(-200)
    }
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: 'orange' }}>
            <View style={{ backgroundColor: 'white' }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Augue interdum velit euismod in pellentesque massa placerat
                duis. Feugiat vivamus at augue eget arcu. In aliquam sem
                fringilla ut morbi tincidunt. Justo nec ultrices dui sapien eget
                mi proin. Mauris pellentesque pulvinar pellentesque habitant
                morbi tristique. Integer vitae justo eget magna fermentum Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Augue interdum velit euismod in pellentesque massa placerat
                duis. Feugiat vivamus at augue eget arcu. In aliquam sem
                fringilla ut morbi tincidunt. Justo nec ultrices dui sapien eget
                mi proin. Mauris pellentesque pulvinar pellentesque habitant
                morbi tristique. Integer vitae justo eget magna fermentum
              </Text>
            </View>
            <ScrollView>
              <Text>
                Elementum curabitur vitae nunc sed velit dignissim sodales ut.
                Elementum eu facilisis sed odio morbi quis commodo odio aenean.
                Fringilla urna porttitor rhoncus dolor purus non enim praesent
                elementum. Lectus urna duis convallis convallis tellus id
                interdum. Et sollicitudin ac orci phasellus egestas tellus
                rutrum. Quam elementum pulvinar etiam non quam lacus. Porttitor
                massa id neque aliquam. Erat pellentesque adipiscing commodo
                elit. Rhoncus est pellentesque elit ullamcorper dignissim cras
                tincidunt lobortis feugiat. Pellentesque sit amet porttitor eget
                dolor morbi. Quam vulputate dignissim suspendisse in est.
                Faucibus interdum posuere lorem ipsum dolor sit amet consectetur
                adipiscing. Amet purus gravida quis blandit turpis cursus in
                hac. Molestie a iaculis at erat. Eu consequat ac felis donec.
                Tincidunt arcu non sodales neque sodales ut etiam sit. Leo in
                vitae turpis massa sed elementum. Tempor orci dapibus ultrices
                in iaculis nunc sed augue lacus. Habitant morbi tristique
                senectus et netus et. Pharetra diam sit amet nisl suscipit
                adipiscing bibendum. Viverra orci sagittis eu volutpat odio
                facilisis mauris sit. Feugiat sed lectus vestibulum mattis.
                Risus in hendrerit gravida rutrum quisque non. Eget nunc
                lobortis mattis aliquam faucibus purus. Lectus proin nibh nisl
                condimentum id venenatis a. Mattis pellentesque id nibh tortor
                id aliquet. Vel turpis nunc eget lorem dolor sed. Sed vulputate
                mi sit amet mauris commodo quis imperdiet. Est ante in nibh
                mauris cursus mattis molestie a. Risus sed vulputate odio ut
                enim blandit volutpat maecenas. Id venenatis a condimentum vitae
                sapien. Arcu dictum varius duis at consectetur lorem. Et odio
                pellentesque diam volutpat commodo sed. Leo integer malesuada
                nunc vel risus commodo. Sit amet dictum sit amet justo donec
                enim diam vulputate. Sed lectus vestibulum mattis ullamcorper
                velit sed ullamcorper morbi tincidunt. Interdum posuere lorem
                ipsum dolor. Sem fringilla ut morbi tincidunt augue interdum
                velit. Nunc faucibus a pellentesque sit amet porttitor eget.
                Risus viverra adipiscing at in tellus integer feugiat
                scelerisque varius. Vestibulum lorem sed risus ultricies. Magnis
                dis parturient montes nascetur ridiculus. Fusce ut placerat orci
                nulla pellentesque dignissim. Et netus et malesuada fames ac
                turpis egestas. Ut tristique et egestas quis ipsum suspendisse
                ultrices gravida dictum. At tempor commodo ullamcorper a. Odio
                ut enim blandit volutpat maecenas volutpat blandit aliquam. Odio
                aenean sed adipiscing diam donec adipiscing. Amet luctus
                venenatis lectus magna. Commodo sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend donec. Eleifend mi in
                nulla posuere sollicitudin. Hac habitasse platea dictumst
                vestibulum rhoncus est pellentesque elit. Sit amet venenatis
                urna cursus eget nunc. In aliquam sem fringilla ut. Aliquam
                etiam erat velit scelerisque in dictum. Viverra adipiscing at in
                tellus integer feugiat scelerisque. Consequat nisl vel pretium
                lectus quam id leo in. Facilisi cras fermentum odio eu feugiat
                pretium nibh ipsum consequat. Lorem donec massa sapien faucibus
                et. At risus viverra adipiscing at in tellus integer feugiat
                scelerisque. Nisl tincidunt eget nullam non nisi est. Potenti
                nullam ac tortor vitae purus faucibus ornare. Netus et malesuada
                fames ac turpis egestas integer. Tempor nec feugiat nisl pretium
                fusce id. Vitae aliquet nec ullamcorper sit amet. Imperdiet dui
                accumsan sit amet nulla facilisi morbi tempus.{' '}
              </Text>
            </ScrollView>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6
  }
})
