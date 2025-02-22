export class DoctorModel {
    doctorId: number;
    doctorName: string;
    speciality: string;


    constructor(id: number, name: string, speciality: string) {
        this.doctorId = id;
        this.doctorName = name;
        this.speciality = speciality;
    }


}