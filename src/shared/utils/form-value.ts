export const formValue = <T extends object>(form: HTMLFormElement) => {
  return Object.fromEntries(new FormData(form).entries()) as T
}
