
import React from 'react';
import { IframeTool } from '@/components/tools/IframeTool';

const tools: { [key: string]: React.ComponentType<any> } = {
  IframeTool,
};

interface PlaygroundProps {
  tool: string;
  props: any;
}

const Playground: React.FC<PlaygroundProps> = ({ tool, props }) => {
  const ToolComponent = tools[tool];

  if (!ToolComponent) {
    return <div>Tool not found: {tool}</div>;
  }

  return <ToolComponent {...props} />;
};

export default Playground;
