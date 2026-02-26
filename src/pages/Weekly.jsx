function Weekly() {
  const weeks = [
    { week: 1, task: "Safety briefing & orientation" },
    { week: 2, task: "System training" },
    { week: 3, task: "Project assignment & documentation" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-primary mb-8">Weekly Summary</h1>
      <div className="space-y-6">
        {weeks.map((w) => (
          <div key={w.week} className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">{w.week}</div>
            <p className="text-gray-700">{w.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weekly;