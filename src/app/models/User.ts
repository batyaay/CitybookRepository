import { Child } from '../models/Child';
export class User   {
    constructor(
        public FirstName?: string,
        public LastName?: string,
        public Tz?: string,
        public Birthdate?: Date,
        public MaleOrFemale?: string,
        public HealthFund?: string,
        public Children?: Array<Child>
    ) {       
        this.FirstName = '';
        this.LastName = '';
        this.Tz = '';
        this.Birthdate = null;
        this.MaleOrFemale = '';
        this.Children = new Array<Child>();
    }
}