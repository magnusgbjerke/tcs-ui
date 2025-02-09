interface Props {
  checked?: boolean;
}

export function Checkbox({ checked = false }: Props) {
  const baseStyles =
    "border border-gray-300 rounded focus:outline-none focus:ring-blue-500 placeholder-gray-400";
  return (
    <div className="ml-4">
      <input type="checkbox" checked={checked} className={baseStyles} />
      <span className="mx-2"></span>
      <input type="checkbox" className={baseStyles} />
    </div>
  );
}
