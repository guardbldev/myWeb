export const ROLE_PERMISSIONS = {
  owner: ["manageMembers", "editContent", "deleteProject", "viewContent", "assignRoles"],
  admin: ["manageMembers", "editContent", "viewContent"],
  editor: ["editContent", "viewContent"],
  viewer: ["viewContent"],
};
export type Role = keyof typeof ROLE_PERMISSIONS;
export function can(role: Role, action: string) {
  return ROLE_PERMISSIONS[role].includes(action);
}