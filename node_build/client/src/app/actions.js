import { SET_SIDEBAR_TOGGLE } from "./actionTypes";

// ========== SIDEBAR ACTIONS ==========
export function toggleSidebar(status) {
  const newStatus = !status;
  return { type: SET_SIDEBAR_TOGGLE, payload: newStatus };
}
