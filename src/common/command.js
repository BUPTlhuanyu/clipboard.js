/**
 * Executes the operation based on the current selection.
 */
export default function command(type) {
  let succeeded = false;

  try {
    succeeded = document.execCommand(type);
  } catch (err) {
    succeeded = false;
  }

  return succeeded;
}
