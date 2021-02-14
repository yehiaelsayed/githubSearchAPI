export function info(message: string, data: any) {
  console.log(message, data);
}

export function error(message: string, data: any = null) {

  console.error(message, data);
} 