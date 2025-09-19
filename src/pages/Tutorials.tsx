
import { tutorials, Tutorial } from '@/content/tutorials';
import { Link } from 'react-router-dom';

const Tutorials: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Tutorials</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial: Tutorial) => (
          <Link to={`/tutorials/${tutorial.slug}`} key={tutorial.slug} className="block p-4 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{tutorial.title}</h2>
            <p className="text-muted-foreground mt-2">{tutorial.description}</p>
            <div className="mt-4 flex gap-2">
              {tutorial.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
