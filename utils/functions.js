export function JoinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}
