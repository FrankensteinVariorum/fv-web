import XmlCache from "./xml-cache";
import JsonCache from "./json-cache";
import { Edition, EditionWithBody, MSEdition } from "./edition";
import { Spine } from "./spine";
import { Annotation } from "./annotation";

/*
 * This class contains the application Store, which holds all the TEI data, annotation data, as well as processed data.
 * We are not using a Redux store here to save time. In the future we might turn this into a Redux store.
 * In the mean time, we have a singleton store instance, which is passed to the root component of the application,
 * (although the singleton can just be accessed by any class)
 */

 class FvStoreClass {
     public readonly cache: XmlCache;
     public readonly jcache: JsonCache;
     public readonly editions: Edition[];
     public readonly spines: Spine[];
     public readonly annotations: Annotation[];
     public static instance = new FvStoreClass();

     private constructor() {
         this.cache = new XmlCache();
         this.jcache = new JsonCache();
         this.editions = [
            new MSEdition('MS', 'MS', [7, 8, 9, 10]),
            new EditionWithBody('1818', '1818', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            new EditionWithBody('Thomas', 'Thomas', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            new EditionWithBody('1823', '1823', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            new EditionWithBody('1831', '1831', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
         ]

         this.spines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => new Spine(i));

         this.annotations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => new Annotation('1818', i)).concat(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => new Annotation('1823', i)),
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => new Annotation('1831', i)),
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => new Annotation('Thomas', i))
         )
     }

     public getEdition(code: string): Edition {
         const ed = this.editions.find((ed) => ed.code === code);

         if (!ed) {
             throw new Error(`Can't find edition ${code}`);
         }

         return ed;
     }

     public getSpine(chunk: number): Spine {
         const spine = this.spines.find((sp) => sp.chunkNumber === chunk);

         if(!spine) {
             throw new Error(`Can't find spine for chunk ${chunk}`);
         }
         return spine;
     }

     public getAnnotation(edition: string, chunk: number): Annotation {
        const annotation = this.annotations.find((sp) => sp.editionCode === edition && sp.chunkNumber === chunk);

        if(!annotation) {
            throw new Error(`Can't find annotations for edition ${edition}`);
        }
        return annotation;
    }
 }

const FvStore = FvStoreClass.instance;
export default FvStore;  // Everybody can just access FvStore.property