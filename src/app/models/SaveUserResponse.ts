export class SaveUserResponse   {
    constructor(
        public IsSuccessful?: boolean,
        public ErrorMessage?: string
    ) {       
        this.IsSuccessful = true;
        this.ErrorMessage = '';       
    }
}