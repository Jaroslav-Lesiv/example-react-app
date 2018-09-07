export const { overrides } = {
  overrides: {
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
        borderRadius: 20,
        border: 0,
        transition: `1s`,
        color: "white",
        padding: "0 25px"
      },
      focused: {
        transform: `scale(1.1)`
      }
    },

    MuiInput: {
      root: {
        borderRadius: 20,
        paddingLeft: 20,
        transition: `1s`,

        before: {
          display: "none"
        },
        

        after: {
            display: "none"
          }
      },

      focused: {
        transform: `scale(1.1)`
      },
      before: {
        display: "none"
      }
    }
  }
};
