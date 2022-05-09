export class Triangle {
    constructor(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if (sideA === sideB && sideB === sideC && sideA != 0) {
            this.isEquilateral = true;
        } else {
            this.isEquilateral = false;
        }
        if ((sideA === sideB || sideA === sideC || sideB === sideC)
            && (sideA + sideB >= sideC)
            && (sideA + sideC >= sideB)
            && (sideB + sideC >= sideA)) {
            this.isIsosceles = true;
        } else {
            this.isIsosceles = false;
        }
        if ((sideA === sideB || sideB === sideC || sideA === sideC)
            || (sideA + sideB <= sideC)
            || (sideA + sideC <= sideB)
            || (sideB + sideC <= sideA)) {
            this.isScalene = true;
        } else {
            this.isScalene = false;
        }
    }
}
