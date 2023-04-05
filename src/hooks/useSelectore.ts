import { TypedUseSelectorHook } from "react-redux";
import { useSelector as selectorHook } from "react-redux";
import { RootState } from "../services/types";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
