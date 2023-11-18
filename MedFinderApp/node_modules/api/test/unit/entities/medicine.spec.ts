import { Symptom } from './../../../src/Models/Treatable/Entities/symptom.entity';
import { Medicine } from './../../../src/Models/Medicine/Entities/medicine.entity';

const SUT ={
    medicine : {
        name:'medicineA',
        description: 'medicineA description',
        manufacturer: 'creator of medicineA',
    },
    symptom : {
        name: 'illnessI',
        type: 'chronic',
        duration: 30*24*60,
        intensity: 10,
    }
}

describe('Medicine', ()=>{
    it('should create a Medicine instance', ()=>{
        const medicine = new Medicine(SUT.medicine.name, SUT.medicine.description, SUT.medicine.manufacturer);
        expect(medicine).toBeInstanceOf(Medicine);
        expect(medicine.name).toBe(SUT.medicine.name);
        expect(medicine.description).toBe(SUT.medicine.description);
        expect(medicine.manufacturer).toBe(SUT.medicine.manufacturer);      
    });
    
    it('should add and remove treatables' , ()=>{
        const medicine = new Medicine(SUT.medicine.name, SUT.medicine.description, SUT.medicine.manufacturer);
        const treatable = new Symptom(SUT.symptom.name, SUT.symptom.type, SUT.symptom.duration, SUT.symptom.intensity);

        medicine.addTreatable(treatable);
        expect(medicine.treatables).toContain(treatable);
        
        medicine.removeTreatable(treatable);
        expect(medicine.treatables).not.toContain(treatable);
    });
    it('should not remove a non-existent treatable', () => {
        const medicine = new Medicine('MedicineName', 'Description', 'Manufacturer');
        const treatable = new Symptom(SUT.symptom.name, SUT.symptom.type, SUT.symptom.duration, SUT.symptom.intensity);
        const otherTreatable = new Symptom(SUT.symptom.name, SUT.symptom.type, 30000, 5);
    
        medicine.addTreatable(treatable);
        medicine.removeTreatable(otherTreatable); // Try to remove a treatable that was never added
        expect(medicine.treatables).toContain(treatable);
      });
});

