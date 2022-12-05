export class Time {
    constructor(  
        public abbreviation :string,
        public datetime :string,
        public day_of_week : number,
        public day_of_year : number,
        public dst : boolean,
        public dst_from :string,
        public dst_offset : number,
        public dst_until :string,
        public raw_offset : number,
        public timezone : string,
        public unixtime : number,
        public utc_datetime : string,
        public utc_offset : string,
        public week_number : number,
      ){

    }
}
