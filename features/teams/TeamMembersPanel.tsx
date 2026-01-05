import React, { useState } from "react";
import { useTeam } from "./TeamContext";
import { can } from "./permissions";

export default function TeamMembersPanel({ members, onChangeRole, onRemove }) {
  const { role } = useTeam();
  return (
    <div className="p-5 rounded-2xl shadow bg-white">
      <div className="font-bold text-lg mb-2">Team Members</div>
      <ul>
        {members.map((m) => (
          <li key={m.uid} className="flex gap-2 items-center mb-2">
            <span className="font-mono">{m.email}</span>
            <span className="ml-2 bg-indigo-100 px-2 py-1 rounded font-bold">{m.role}</span>
            {can(role, "assignRoles") && (
              <select
                className="ml-2 rounded px-2 py-1"
                value={m.role}
                onChange={(e) => onChangeRole(m.uid, e.target.value)}
              >
                <option value="owner">Owner</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            )}
            {can(role, "manageMembers") && (
              <button className="ml-2 bg-red-100 px-2 rounded" onClick={() => onRemove(m.uid)}>
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}