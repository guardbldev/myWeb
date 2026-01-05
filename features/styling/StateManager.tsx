import React from 'react';
import TimelineAnimationEditor from './TimelineAnimationEditor';

export default function StateManager({ elementId, selected }: { elementId: string, selected: any }) {
  // Transition and animation controls per state
  return (
    <div>
      <div className="mt-3 font-bold text-sm">Transitions / Keyframes</div>
      <TimelineAnimationEditor elementId={elementId} selected={selected} />
    </div>
  );
}