
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { tutorials, Tutorial } from '@/content/tutorials';


import NotFound from './NotFound';
import Playground from '@/components/Playground';

const TutorialPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tutorial = tutorials.find((t) => t.slug === slug);

  if (!tutorial) {
    return <NotFound />;
  }

  const renderContent = (content: Tutorial['content']) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index}>{item.text}</p>;
        case 'code':
          return (
            <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code className={`language-${item.language}`}>{item.code}</code>
            </pre>
          );
        case 'playground':
          return <Playground key={index} tool={item.tool!} props={item.props} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-2">{tutorial.title}</h1>
      <p className="text-muted-foreground mb-4">{tutorial.description}</p>
      <div className="flex gap-2 mb-4">
        {tutorial.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
        ))}
      </div>
      <div className="prose max-w-none">
        {renderContent(tutorial.content)}
      </div>
    </div>
  );
};

export default TutorialPage;
