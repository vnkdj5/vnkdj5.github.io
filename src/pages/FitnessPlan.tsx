import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const FitnessPlan = () => {
  const [showTOC, setShowTOC] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    // Close mobile TOC if open
    setShowTOC(false);
    
    // Expand the accordion section
    setOpenAccordion(sectionId);
    
    // Wait a bit for the accordion to expand, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Scroll to the element with offset for better visibility
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const offset = 100; // Offset to account for header
        
        window.scrollTo({
          top: absoluteElementTop - offset,
          behavior: "smooth"
        });
      }
    }, 150); // Small delay to allow accordion animation
  };

  const sections = [
    { id: "schedule", title: "Weekly Schedule" },
    { id: "gym-split", title: "Gym Split Details" },
    { id: "running", title: "Running Plan" },
    { id: "nutrition", title: "Nutrition Guidelines" },
    { id: "eating-pattern", title: "Daily Eating Pattern" },
    { id: "discipline", title: "Discipline Rules" },
    { id: "tracker", title: "Weekly Tracker" },
  ];

  return (
    <div className="container mx-auto py-4 md:py-16 max-w-6xl">
      {/* Mobile Table of Contents */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setShowTOC(!showTOC)}
          className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg w-full text-left"
        >
          <Menu className="h-4 w-4" />
          <span className="font-medium">Table of Contents</span>
          <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${showTOC ? 'rotate-180' : ''}`} />
        </button>
        {showTOC && (
          <div className="mt-2 p-4 bg-muted/30 rounded-lg space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left p-2 hover:bg-muted/50 rounded transition-colors"
              >
                {section.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Table of Contents */}
      <div className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-background/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg max-h-[80vh] overflow-y-auto">
          <h3 className="font-semibold mb-3 text-sm">Quick Navigation</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-muted/50"
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">3-Month Fitness Plan</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          A comprehensive fitness and nutrition plan designed for sustainable weight loss and strength building.
        </p>
      </header>

      <Accordion type="single" collapsible className="space-y-6" value={openAccordion} onValueChange={setOpenAccordion}>
        {/* Weekly Schedule Overview */}
        <AccordionItem value="schedule" id="schedule">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Weekly Schedule Overview
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[600px] md:min-w-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="sticky left-0 bg-background z-10">Day</TableHead>
                      <TableHead>Gym Access</TableHead>
                      <TableHead>Workout</TableHead>
                      <TableHead>Focus</TableHead>
                      <TableHead>Run / Cardio</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Mon</TableCell>
                      <TableCell>
                        <span className="text-green-600 dark:text-green-400">✅</span>
                      </TableCell>
                      <TableCell>Push (Chest, Shoulders, Triceps)</TableCell>
                      <TableCell>Upper Strength</TableCell>
                      <TableCell>3–4 km easy run</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Tue</TableCell>
                      <TableCell>
                        <span className="text-green-600 dark:text-green-400">✅</span>
                      </TableCell>
                      <TableCell>Pull (Back, Biceps)</TableCell>
                      <TableCell>Upper Strength</TableCell>
                      <TableCell>Intervals – 20–25 min</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Wed</TableCell>
                      <TableCell>
                        <span className="text-red-600 dark:text-red-400">❌</span>
                      </TableCell>
                      <TableCell>Active Recovery / Mobility</TableCell>
                      <TableCell>Recovery</TableCell>
                      <TableCell>Walk or stretch</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Thu</TableCell>
                      <TableCell>
                        <span className="text-red-600 dark:text-red-400">❌</span>
                      </TableCell>
                      <TableCell>Bodyweight HIIT / Core</TableCell>
                      <TableCell>Endurance</TableCell>
                      <TableCell>2–3 km jog (optional)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Fri</TableCell>
                      <TableCell>
                        <span className="text-green-600 dark:text-green-400">✅</span>
                      </TableCell>
                      <TableCell>Full Body + Core (short)</TableCell>
                      <TableCell>Full Body Strength</TableCell>
                      <TableCell>Rest (travel day)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Sat</TableCell>
                      <TableCell>
                        <span className="text-green-600 dark:text-green-400">✅</span>
                      </TableCell>
                      <TableCell>Legs + Core</TableCell>
                      <TableCell>Lower Strength</TableCell>
                      <TableCell>3–4 km optional run</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Sun</TableCell>
                      <TableCell>
                        <span className="text-red-600 dark:text-red-400">❌ (Gym closed)</span>
                      </TableCell>
                      <TableCell>Long Run (5–10 km)</TableCell>
                      <TableCell>Endurance</TableCell>
                      <TableCell>Key fat-burn run</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Gym Split Details */}
        <AccordionItem value="gym-split" id="gym-split">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Gym Split Details
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">Mon – Push:</p>
                <p className="text-muted-foreground">Bench Press, Overhead Press, Incline Dumbbell Press, Triceps Pushdown, Plank 3×1min</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">Tue – Pull:</p>
                <p className="text-muted-foreground">Pull-ups, Cable Rows, Barbell Curls, Face Pulls, Hanging Leg Raises</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">Fri – Full Body:</p>
                <p className="text-muted-foreground">Squat, Pushups, Dumbbell Press, Rows, Core Circuit</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium">Sat – Legs:</p>
                <p className="text-muted-foreground">Squat, Leg Press, RDLs, Calf Raises, Core Finisher</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Running Plan */}
        <AccordionItem value="running" id="running">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Running Plan
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[500px] md:min-w-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="sticky left-0 bg-background z-10">Day</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Distance / Duration</TableHead>
                      <TableHead>Goal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Mon</TableCell>
                      <TableCell>Steady Run</TableCell>
                      <TableCell>3–4 km</TableCell>
                      <TableCell>Shake off weekend</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Tue</TableCell>
                      <TableCell>Intervals</TableCell>
                      <TableCell>25 min</TableCell>
                      <TableCell>Burn + speed work</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Wed</TableCell>
                      <TableCell>Walk / Stretch</TableCell>
                      <TableCell>30 min</TableCell>
                      <TableCell>Recovery</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Thu</TableCell>
                      <TableCell>Short Jog</TableCell>
                      <TableCell>2–3 km</TableCell>
                      <TableCell>Keep metabolism up</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Sat</TableCell>
                      <TableCell>Optional</TableCell>
                      <TableCell>3–4 km</TableCell>
                      <TableCell>Light pace post-legs</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Sun</TableCell>
                      <TableCell>Long Run</TableCell>
                      <TableCell>5–10 km</TableCell>
                      <TableCell>Main fat-burn run</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Nutrition Guidelines */}
        <AccordionItem value="nutrition" id="nutrition">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Nutrition Guidelines
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[500px] md:min-w-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="sticky left-0 bg-background z-10">Nutrient</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Calories</TableCell>
                      <TableCell>1800–1900 kcal/day</TableCell>
                      <TableCell>Maintain ~600 kcal deficit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Protein</TableCell>
                      <TableCell>120–130g/day</TableCell>
                      <TableCell>Crucial for muscle retention</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Carbs</TableCell>
                      <TableCell>180–230g/day</TableCell>
                      <TableCell>Adjust up slightly on long-run days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Fats</TableCell>
                      <TableCell>50–60g/day</TableCell>
                      <TableCell>Keep moderate for hormone balance</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Hydration</TableCell>
                      <TableCell>3–4 L/day</TableCell>
                      <TableCell>Critical for performance</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Daily Eating Pattern */}
        <AccordionItem value="eating-pattern" id="eating-pattern">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Daily Eating Pattern (Example)
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[500px] md:min-w-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="sticky left-0 bg-background z-10">Time</TableHead>
                      <TableHead>Meal</TableHead>
                      <TableHead>Example</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">6:00 AM</TableCell>
                      <TableCell>Pre-gym</TableCell>
                      <TableCell>Coffee + banana</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">8:00 AM</TableCell>
                      <TableCell>Post-gym</TableCell>
                      <TableCell>Whey + oats + 4 egg whites / paneer</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">12:30 PM</TableCell>
                      <TableCell>Lunch</TableCell>
                      <TableCell>2 rotis + dal + sabzi + salad</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">4:30 PM</TableCell>
                      <TableCell>Snack</TableCell>
                      <TableCell>Nuts or fruit + black coffee</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">7:30 PM</TableCell>
                      <TableCell>Post-run</TableCell>
                      <TableCell>Whey or Greek curd + fruit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">8:30 PM</TableCell>
                      <TableCell>Dinner</TableCell>
                      <TableCell>Soup + veggies / dal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">10:00 PM</TableCell>
                      <TableCell>Optional</TableCell>
                      <TableCell>Milk if hungry</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Discipline & Lifestyle Rules */}
        <AccordionItem value="discipline" id="discipline">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Discipline & Lifestyle Rules
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground">Avoid OTT or YouTube during meals or work hours.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground">Watch 1 hour of entertainment max per day (after dinner).</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground">1 movie per week — Saturday or Sunday only.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground">Track calories at least 4 days a week.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground">Sleep 7+ hours daily.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground">Progress photos every 2 weeks.</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Weekly Summary Tracker */}
        <AccordionItem value="tracker" id="tracker">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            Weekly Summary Tracker
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[600px] md:min-w-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="sticky left-0 bg-background z-10">Metric</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Actual</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Weight (kg)</TableCell>
                      <TableCell>-0.5 to -0.7/week</TableCell>
                      <TableCell className="text-muted-foreground italic">Track weekly</TableCell>
                      <TableCell className="text-muted-foreground italic">Morning weight</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Total Workouts</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell className="text-muted-foreground italic">Track weekly</TableCell>
                      <TableCell className="text-muted-foreground italic">Gym sessions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Total Runs</TableCell>
                      <TableCell>3–4</TableCell>
                      <TableCell className="text-muted-foreground italic">Track weekly</TableCell>
                      <TableCell className="text-muted-foreground italic">Cardio sessions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Avg Calories</TableCell>
                      <TableCell>1800–1900</TableCell>
                      <TableCell className="text-muted-foreground italic">Track daily</TableCell>
                      <TableCell className="text-muted-foreground italic">Weekly average</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Protein Intake</TableCell>
                      <TableCell>120–130g</TableCell>
                      <TableCell className="text-muted-foreground italic">Track daily</TableCell>
                      <TableCell className="text-muted-foreground italic">Weekly average</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Sleep Avg</TableCell>
                      <TableCell>7+ hrs</TableCell>
                      <TableCell className="text-muted-foreground italic">Track daily</TableCell>
                      <TableCell className="text-muted-foreground italic">Weekly average</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background z-10">Steps / Activity</TableCell>
                      <TableCell>8–10k/day</TableCell>
                      <TableCell className="text-muted-foreground italic">Track daily</TableCell>
                      <TableCell className="text-muted-foreground italic">Weekly average</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FitnessPlan;