export default interface IAuth {
  generateToken: (username:number) => string
}