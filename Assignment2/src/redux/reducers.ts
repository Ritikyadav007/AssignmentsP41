export type user = {
  id: number; // The user's id
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
  isLiked?: boolean;
};

export type ApiState = {
  users: Array<user>;
  isLoading: boolean;
};

const initialState = {
  users: [],
  isLoading : false,
};

type Action = any;

export const reducers = (state: ApiState = initialState, action: Action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, users: action.payload };
    }
    case "SET_ISLOADING":{
      return{ ...state, isLoading: action.payload};
    }
    case "DELETE_USER":
      const updatedUsers = state.users.filter(
        (userItem) => userItem.id !== action.payload
      );
      return { ...state, users: updatedUsers };

    case "LIKE_USER":
      const updatedUsersAfterLike = state.users.map((item) =>
        item.id !== action.payload
          ? item
          : { ...item, isLiked: item.isLiked ? !item.isLiked : true }
      );
      return { ...state, users: updatedUsersAfterLike };
    //   state.users.map((item)=> {
    //     if(item.id !== action.payload){
    //         return item
    //     }else if(item.isLiked){
    //         return {...item, isLiked: !item.isLiked}

    //   }else{
    //       return {...item, isLiked: true}
    //   }
    // })

    default:
      return state;
  }
};
