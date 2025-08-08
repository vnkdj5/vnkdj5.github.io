export function EducationSection({ education, certifications }: { education: { degree: string; institution: string; duration: string; cgpa?: string; percentage?: string; }[]; certifications: string[]; }) {
  return (
    <section id="education" className="container mx-auto py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Education & Certifications</h2>
      </header>
      <div className="space-y-6">
        {education.map((e) => (
          <div key={e.degree} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{e.degree}</h3>
              <span className="text-xs text-muted-foreground">{e.duration}</span>
            </div>
            <p className="text-sm text-muted-foreground">{e.institution}</p>
            {e.cgpa && <p className="text-sm mt-1">CGPA: {e.cgpa}</p>}
            {e.percentage && <p className="text-sm mt-1">Percentage: {e.percentage}</p>}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Certifications</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
