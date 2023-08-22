import { StyleSheet } from "react-native";

const stylesReport=StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 21,
        marginBottom: 10,
        backgroundColor: "#c0c0c0",
        width:"100%"
      },
      containerTextCheckBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,
      },
      text: {
        fontSize: 14,
        fontWeight: "600",
        color: "#383839",
        letterSpacing: -0.011 * 14, // 16 = baseFontSize
        flexShrink: 1,
        marginHorizontal:8,
        
      },
      checkMark: {
        width: 20,
        height: 20,
        borderRadius: 7,
      },
      deleteButton: {
        position: "absolute",
        right: 0,
        top: -6,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ef4444",
        borderRadius: 10,
      },
      contentContainer: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 15,
      },
      row: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      },
      title: {
        fontWeight: "900",
        letterSpacing: 0.5,
        fontSize: 16,
      },
      subtitle: {
        color: "#101318",
        fontSize: 14,
        fontWeight: "bold",
      },
      description: {
        color: "#56636F",
        fontSize: 13,
        fontWeight: "normal",
        width: "100%",
      },
})

export default stylesReport