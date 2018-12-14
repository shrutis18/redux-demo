export const mapStateToProps = (state) => {
    return {
            name: state.name
          }
    }
    
    export const  mapDispatchToProps = (dispatch) => {
        return {
            changeName : (name) => {
                name = "shruti"
                dispatch({
                  type: "UPDATE",
                  name
                })
            }
    
          }
    }