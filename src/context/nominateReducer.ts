import { NominateState } from "./";

type NominateActionType = { type: "[Ui] - handleNominate"; payload: any };

export const nominateReducer = (
  state: NominateState,
  action: NominateActionType
): NominateState => {
  switch (action.type) {
    case "[Ui] - handleNominate":
      return {
        ...state,
        nominations: {
          ...state.nominations,
          [(state.nominations.Best_Actor = action.payload.nomination)]:
            action.payload.actionToNominate,
        },
      };

    default:
      return state;
  }
};
