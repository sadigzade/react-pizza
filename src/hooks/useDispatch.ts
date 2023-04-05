import { useDispatch as dispatchHook } from "react-redux";
import { AppDispatch, AppThunk } from "../services/types";

type DispatchFunc = () => AppDispatch | AppThunk;
export const useDispatch: DispatchFunc = dispatchHook;
