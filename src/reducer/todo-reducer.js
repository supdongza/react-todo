export default function todoReducer(todo, action) {
  switch (action.type) {
    case "add": {
      const { title } = action;
      return [
        ...todo,
        {
          id: Date.now(),
          title,
          state: false,
        },
      ];
    }
    case "update": {
      const { id, state } = action;
      return todo.map((todo) =>
        todo.id === id ? { ...todo, state: !state } : todo
      );
    }
    case "deleted": {
      const { id } = action;
      return todo.filter((todo) => todo.id !== id);
    }
    default: {
      throw Error("알수없는 액션 타입이다:", action.type);
    }
  }
}
