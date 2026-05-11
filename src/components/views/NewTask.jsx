export default function NewTask() {
  return (
    <div>
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="mx-2 text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}
