import React, { createContext, useContext } from "react";
export const TeamContext = createContext<{ role: Role, teamId: string }>({ role: "viewer", teamId: "" });
export function useTeam() { return useContext(TeamContext); }