export class UserModel{

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public birthday: string;
  public gender: string;
  public contact: number;
  public location: string;
  public feet: number;
  public inch: number;
  public kg: number;
  public gm: number;
  public primaryCareTakerName: string;
  public primaryCareTakerNo: number;
  public secondaryCareTakerName: string;
  public secondaryCareTakerNo: number;
  public GPName: string;
  public GPNo: number;
  public alterBit: number;
  public appointBit: number;

  constructor(firstName?: string, lastName?: string, email?: string, password?: string, birthday?: string,
              gender?: string, contact?: number, location?: string, feet?: number, inch?: number, kg?: number,
              gm?: number, primaryName?: string, primaryNo?: number, secondaryNo?: number, secondaryName?: string,
              GPName?: string, GPNo?:number, alterBit?: number, appointBit?: number){

      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.birthday = birthday;
      this.gender = gender;
      this.contact = contact;
      this.location = location;
      this.feet = feet;
      this.inch = inch;
      this.kg = kg;
      this.gm = gm;
      this.primaryCareTakerName = primaryName;
      this.primaryCareTakerNo = primaryNo;
      this.secondaryCareTakerName = secondaryName;
      this.secondaryCareTakerNo = secondaryNo;
      this.GPName = GPName;
      this.GPNo = GPNo;
      this.alterBit = alterBit;
      this.appointBit = appointBit;
  }


}
