import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Drawer } from 'vaul';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger>Open Drawer</Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay style={{ position: "fixed", inset: 0,  }} />
            <Drawer.Content style={{
                background: "white",
                display: "flex",
                flexDirection: "column",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                height: "96%",
                marginTop: 16,
                position: "fixed",
                bottom: "0",
                left: 0,
                right: 0,
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 40px",
                }} className='bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0'>
              <p>Content</p>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
