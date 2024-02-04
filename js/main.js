// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (specimenNum, dna) => {
    const newSpecimen = {
      specimenNum, //number of the DNA base
      dna, // the strand 15 bases
      mutate() {
        /* number of random base*/
        numberOfRandomBase = Math.floor(Math.random() * 15);
        //4
        /*find a random base 1 in 15 and change to a different base*/
        let oldRandomBase = dna[numberOfRandomBase];
        //      A                 lay tu so 4 chuoi dna
        /* we have returnRandBase is random A T G or C */
        /*assign oldRandomBase = returnRandBase except the old result.
      //create an array with no same Old base*/
        const generalBases = ["A", "G", "T", "C"];
        //indexOld of the generalBases
        const indexOld = generalBases.indexOf(oldRandomBase);
        //this is the new array without A (selected base)
        const newBases = generalBases
          .slice(0, indexOld)
          .concat(generalBases.slice(indexOld + 1));
        //        =(A,G,T,C) splice (A,1)
        //Change the old base to the new base
        const newRandomBase = newBases[Math.floor(Math.random() * 3)];
        //Get the new base strand
        const newDNA = [...dna];
        newDNA[numberOfRandomBase] = newRandomBase;
        console.log(dna);
        // console.log(numberOfRandomBase);
        console.log(newDNA);
      },
      //compare dna and newDNA
      compareDNA(otherSpecimen) {
        identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherSpecimen[i]) {
            identicalBases++;
          }
        }
        const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
        console.log(
          `Specimen ${this.specimenNum} and specimen ${otherSpecimen.specimenNum} have ${percentage}% in common`
        );
      },
      //return true if array has more C or G 60%
      willLikelySurvive() {
        numOfCG = 0;
        for (let i = 0; i <= this.dna.length; i++) {
          if (this.dna === "C" || this.dna === "G") {
            numOfCG++;
          }
        }
        return numOfCG;
      },
      /*this method is to return 2 strand ith complement on each other A-T n G-C
  let say i is the number of the strand DNA
  i= 1...2...3...4..5..6..7
  DNA[1]= [A,G,T]
  we want to find a different strand that is DNA[?]= [T,C,A] in the rule that A-T G-C
  we want to take in dna 
  */
      complementStrand() {
        let complementDNA = [];
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === "A") {
            complementDNA.push("T");
          } else if (this.dna[i] === "T") {
            complementDNA.push("A");
          } else if (this.dna[i] === "C") {
            complementDNA.push("G");
          } else if (this.dna[i] === "G") {
            complementDNA.push("C");
          }
        }
        return complementDNA;
      },
    };
    return newSpecimen;
  };
  let survivors = [];
  let survivorsNum = 0;
  while (survivors.length <= 30) {
    survivorsNum = survivors.length + 1;
    const newSurvivor = pAequorFactory(survivorsNum, mockUpStrand());
    if (newSurvivor.willLikelySurvive()) {
      survivors.push(newSurvivor);
    }
  }
  console.log("survivors");
  
  const specimenA = pAequorFactory(9, mockUpStrand());
  const specimenB = pAequorFactory(4, mockUpStrand());
  
  specimenA.mutate();
  specimenA.compareDNA(specimenB);
  
  console.log(specimenA.willLikelySurvive());
  console.log(specimenA.complementStrand());
  