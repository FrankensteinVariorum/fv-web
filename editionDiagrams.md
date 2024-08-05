Explanatory diagrams on the site were made using [mermaid.live](https://mermaid.live/) in simple markdown to generate SVG.

## versionHistory.svg
Diagram of relationships among the versions of *Frankenstein* in the Variorum. [![](https://mermaid.ink/img/pako:eNp1ks9uozAQxl9l5D20lSAtQdsgVqqUzZ89dS_pLc5hwANYMTYyRmlUVeqD7L5cn6QO0IpLffLMfPPT5_G8sNwIYikrlDnlFVoHT2uuwZ_lnvPHHfw1jjJjjrcHCMMQfvtsYbGsSTu0Z0DlZtBg22JJrdcMva07K4IlFFKp9EcyXxQ0D8ba0nMeYHW9j5Io8QrbOmi6TMkcnTT6cDNFrEZEgVm8oKGy6gHriz20pdSoJILU4CqC97d_T5WpsYXcNOf3t_-3hyluPeIoXiTZiPPJcDYLn2E7xErq465Xx77LmiN96oMhDE9SuCqNmucgN8rYNFOYH3_13VOHm-v9HyNOUl-1ECXz-PtXbkZb95SJ_G60teptPcD2Mqk4AhJy2rn5LE9B2xEkFj_je5w44pprFrCabI1S-P9-ueQ58zOribPUXwUV2CnHGdevXoqdM7uzzlnqbEcBs6YrK5YWqFofdY1AR2uJpcX6K3uxaOzjsFH9Yr1-ANnmvZs?type=png)](https://mermaid.live/edit#pako:eNp1ks9uozAQxl9l5D20lSAtQdsgVqqUzZ89dS_pLc5hwANYMTYyRmlUVeqD7L5cn6QO0IpLffLMfPPT5_G8sNwIYikrlDnlFVoHT2uuwZ_lnvPHHfw1jjJjjrcHCMMQfvtsYbGsSTu0Z0DlZtBg22JJrdcMva07K4IlFFKp9EcyXxQ0D8ba0nMeYHW9j5Io8QrbOmi6TMkcnTT6cDNFrEZEgVm8oKGy6gHriz20pdSoJILU4CqC97d_T5WpsYXcNOf3t_-3hyluPeIoXiTZiPPJcDYLn2E7xErq465Xx77LmiN96oMhDE9SuCqNmucgN8rYNFOYH3_13VOHm-v9HyNOUl-1ECXz-PtXbkZb95SJ_G60teptPcD2Mqk4AhJy2rn5LE9B2xEkFj_je5w44pprFrCabI1S-P9-ueQ58zOribPUXwUV2CnHGdevXoqdM7uzzlnqbEcBs6YrK5YWqFofdY1AR2uJpcX6K3uxaOzjsFH9Yr1-ANnmvZs)

```
flowchart TD
    A[\MS Notebook/] --- B[\fragmentary alt. passages/] 
    style A fill:#827fe2, 
    A --> C([1818 first publication])
    style C fill:#fab37e
    C --> D[\Marginalia in the “Thomas copy”/]
    style D fill:#e378be
     D -..-x F
    linkStyle 3 stroke:#e378be,stroke-width:1px,color:black;
   
    C --> E([Godwin's 1823 publication])
    style E fill:#6ebdc0
     C -..-> F([1831 edition])
    E -..-> F
    style F fill:#d7536a
```

## editionLineage.svg
Print and Digital Editions of Frankenstein leading to the *Frankenstein Variorum*

[![](https://mermaid.ink/img/pako:eNqFVdtu2zgQ_ZWBFug6gORGdpGLEBhofUniOkUQBy2aOA-0NLYIU6RBUskaRoD9jf5ev6RDSkqdut31gyVyLjznzHC0DVKVYZAEC6Ge0pxpC7eDmQT6vW-1zua9-PT40Jy9nfcODqIo-tC6h2rzXQJjVqCBG-RL1H8bwIxbrqTzTaBKMeLa2MYAagE2R4hP4hOw-I8FLiF-F8MGmTbtOqSvhGCW8jrX21wVzECq1ht4ZJozaQ1FCS4xBI1rjQbdVnzSjXcdAGUmFWVpPxxAFLXb7SjqQb9177GfVoQeDuoTySOCQWM8SqBPOghHTc25NEp-__ebgTPeG2kmVyiNRTriE-WfK7WiXLznSVfpFiw1vOACYa25tFwuG-JXU5BNkNsjIY4i-jt-jWS43RKSgmeRh5rANUppNuKRSc5gKDC1WkmewvCn4D4eM1JxaktXxH6pCSwwmVGZ0hVMNjLNvZfhGUbzTeSepKxTuy6OL4yLcHI-P-9iGu2o80lpBn1NLH4WvQl_wQJP3Oa79QvJ3umGL_l_W66wiqWda56uUDvx3rhyWKvA0Bq9cFdfpnT0k9IrU0tn7IYE_wALLkTyV3aKLOvuGAZ_MgxrwwKz06OjHcNoP2IAronO_a3oHB42t8LbhpWt6uFRtfDv516-C19SCjpOXB_dkCrUGSn0uU6p0VwHJcRvzTS1fqOp2auJO7A64nZ4SarKR9TGey60Kv6vT-qKVvwu9olfeNiXNb_4FT_HnYxjv7j0nMY1p7ibwDRHIXATnavsiYr3Xqc5f8SdSZDxtSDSxPltptKyoFvL9Ia2l9wy0TB-hXC8j3DsEX6sEXZ-U4GJf__oAU5qgB0aVa9u7mfqPKXL4qVZ02bmXE1Dr3hYd65bdTvhr5eiAjjZBziTppwvNVvnIHBJXQ33E_988OavrXs_Exq-dfPebbf_JcTXPzXv3S8A6JyZnMkgDArUBeMZjfWt858FNH4KnAVUjSDDBSuFnQUz-UyurLRqSsMhSKwuMQy0Kpd5kCyYMLQq1xkJM-CMSBUvuw6l0lfVh8N_P8JgzeSdUo3P8w8Lf_vj?type=png)](https://mermaid.live/edit#pako:eNqFVdtu2zgQ_ZWBFug6gORGdpGLEBhofUniOkUQBy2aOA-0NLYIU6RBUskaRoD9jf5ev6RDSkqdut31gyVyLjznzHC0DVKVYZAEC6Ge0pxpC7eDmQT6vW-1zua9-PT40Jy9nfcODqIo-tC6h2rzXQJjVqCBG-RL1H8bwIxbrqTzTaBKMeLa2MYAagE2R4hP4hOw-I8FLiF-F8MGmTbtOqSvhGCW8jrX21wVzECq1ht4ZJozaQ1FCS4xBI1rjQbdVnzSjXcdAGUmFWVpPxxAFLXb7SjqQb9177GfVoQeDuoTySOCQWM8SqBPOghHTc25NEp-__ebgTPeG2kmVyiNRTriE-WfK7WiXLznSVfpFiw1vOACYa25tFwuG-JXU5BNkNsjIY4i-jt-jWS43RKSgmeRh5rANUppNuKRSc5gKDC1WkmewvCn4D4eM1JxaktXxH6pCSwwmVGZ0hVMNjLNvZfhGUbzTeSepKxTuy6OL4yLcHI-P-9iGu2o80lpBn1NLH4WvQl_wQJP3Oa79QvJ3umGL_l_W66wiqWda56uUDvx3rhyWKvA0Bq9cFdfpnT0k9IrU0tn7IYE_wALLkTyV3aKLOvuGAZ_MgxrwwKz06OjHcNoP2IAronO_a3oHB42t8LbhpWt6uFRtfDv516-C19SCjpOXB_dkCrUGSn0uU6p0VwHJcRvzTS1fqOp2auJO7A64nZ4SarKR9TGey60Kv6vT-qKVvwu9olfeNiXNb_4FT_HnYxjv7j0nMY1p7ibwDRHIXATnavsiYr3Xqc5f8SdSZDxtSDSxPltptKyoFvL9Ia2l9wy0TB-hXC8j3DsEX6sEXZ-U4GJf__oAU5qgB0aVa9u7mfqPKXL4qVZ02bmXE1Dr3hYd65bdTvhr5eiAjjZBziTppwvNVvnIHBJXQ33E_988OavrXs_Exq-dfPebbf_JcTXPzXv3S8A6JyZnMkgDArUBeMZjfWt858FNH4KnAVUjSDDBSuFnQUz-UyurLRqSsMhSKwuMQy0Kpd5kCyYMLQq1xkJM-CMSBUvuw6l0lfVh8N_P8JgzeSdUo3P8w8Lf_vj)

```
flowchart TD
    A((<b>1970s</b>))---B([ <b>1974: James Reiger's edition</b>: 
    First edition of the 1818 text in 141 years. 
    Collates the Thomas copy variants inline, represents 1831 variants in endnotes.]) --...--> C([<b>1990s</b>])
    C --- D([<b>1996: Charles Robinson’s <i>Frankenstein Notebooks</i></b>:
    facsimile printing of the MS notebooks of 1816-1817])
    C --- E{{<b>mid-1990s: Pennsylvania Electronic Edition</b>
   eds. Stuart Curran and Jack Lynch
   side-by-side collation of 1818 and 1831}}
    C --- F([<b>1996: Nora Crook's edition of 1818</b>
    with Thomas copy, 1823, and 1831 variants in endnotes,
    in Pickering & Chatto series of MWS's works])
   style B fill:#d9ead3
   style D fill:#d9ead3
   style E fill:#fed966
   style F fill:#d9ead3
   D --> G((<b>2000s</b>))
   E --> G 
   F --> G
   G --- H{{<b>2007: <i>Romantic Circles</i>: separate editions of 1818 and 1831</b> 
   TEI conversions from Pennsylvania Electronic Edition}}
   style H fill:#fed966
   H --> I((<b>2010s</b>))
   D ---> J
   I --- J{{<b>2013: Shelley-Godwin Archive</b>: 
   diplomatic/documentary digital edition}}
   style J fill:#fed966
   J --> K((<b>2020s</b>))
   E --> L
   K --- L{{<b>2024: Frankenstein Variorum</b>
   collates MS, 1818, Thomas, 1832, and 1831}}
   style L fill:#fed966
   
subgraph legend [Legend]
   Y([print edition])
   Z{{digital edition}}
   style Y fill:#d9ead3
   style Z fill:#fed966
end
```
### Technologies in each stage of the project
[![](https://mermaid.ink/img/pako:eNp1VmFv2zYQ_SuE9iEZai8fihaokQXImsRJl6TBHBRp7XygpJPEhSI1krLjFv3ve0c6sZxsMQJJ9PHuvXfvaP3ICltSNskqbVdFI10QtycLc7w_n9neFSQCPQYvOkeddDIoa-5_nUwmQQVN19g5Ho__mM9vyGnhqO61dIIeEe09Qv1I2Lt1TUbcXV2K01IF6w5zd3AkKutEYc2SXFCmFlaX4vwWMSsVGtsHQaYcB1l7EWzcu93VSvfAWwqrdcQjiqY3DyK3vSmlU-SFMsIn8JXS5O_vGTAVDWgB7sf5_DA_uptd3h4e5EfbxMBM__RkCs6OKjXSGBuQbxtjXS2N-s4RrEvKj3pAuRdh-L0NtSdwae8Z1vYqLAUy2LwnQkORSd_txv82ALswJ_vzj8-ZbIVySxLQLGrLC2dOmgcyPpB63ZfTSPRmDUUNUx3wSO2MNAAkWORIrKQpQdq1Um-edW0detKKN6Dpg-uL2LAEi-4GcE9R8iyWfPpyUDShGOfSUym0yp1064hE20KGVEnVpiUDszGIElQdnFOkfnZSuZXyBKVaRu6TILEJQIUEPhX63IcO_mHPVMwjcJgUHhE6-UE0cBtXVCZFsLgyZ9dJrZPGfuh9hrNqyBGLtU5AhxhF5WwrSBaNsIhwuz2c7s9votpxu5h1ylDc_U4QBoKLJxfFLFvj2EjkVVPPn90rOuvD1h6d6kgj99bUM4rTAP4c7iciwC2eOftBHVYq1Uo-TgCjUG9eYhwQmwLLxUuDcUMvaQlDNuzIuBkq-SDRR1FIXfSp6qZZlYIOaRQeVdu3Yil1T7Fj6MR_9BzNCEnpJRakCRv_4FTaQrsAtE87Qy5ueuQrZZBJZS6ZYEeI42eISYgE7rjr9JrPH79VhPuGlcIR_A0jBd_hnw3KKf9PKwZ0uQsISbqBKy5MICcxWvDeFzCzDmKco0grO84--zId5DtHvj93870e6sQWy_ygOH8lC9o4o9Nq025NOJPcAU7-DtexV99J9EZtjrYYjjq3T86J2TaCsJLsHmT5NPt8zTgGID8xSB6Aq90BuHiC8sra15HSX2hvgPWOMdZILJdyVjjVhejrg9xtmsmpuHikGZkwBpFOqN7xPIH7ivItd1FiQDCx6wHKr_ida5JonbN_E0qvrHvgH8M04kj_Cui3CLRW4WCqwnmfM7SRmGlZPIxES8TnWep_HLOcVeDP8e_4O8Kv60m8mWKK4s1V_Oroa_yCL9N0uUqXhSm09P6EcN49oQA7E2K3Ju8ctcMQ8OLm6ckv5QeS5dvRNvTtbmhCtwmuqPzw_v2L4GyUtYQzUpV4Q_ixMEIsMijf0iKb4LakSvY6LLKF-YlQ2Qc7W5sim6ALNMr6DvLRiZK1k202qaT2WHW2r5vnJ4ovBVfpHSS-ioyyTppv1rYpzc9_AdrhCio?type=png)](https://mermaid.live/edit#pako:eNp1VmFv2zYQ_SuE9iEZai8fihaokQXImsRJl6TBHBRp7XygpJPEhSI1krLjFv3ve0c6sZxsMQJJ9PHuvXfvaP3ICltSNskqbVdFI10QtycLc7w_n9neFSQCPQYvOkeddDIoa-5_nUwmQQVN19g5Ho__mM9vyGnhqO61dIIeEe09Qv1I2Lt1TUbcXV2K01IF6w5zd3AkKutEYc2SXFCmFlaX4vwWMSsVGtsHQaYcB1l7EWzcu93VSvfAWwqrdcQjiqY3DyK3vSmlU-SFMsIn8JXS5O_vGTAVDWgB7sf5_DA_uptd3h4e5EfbxMBM__RkCs6OKjXSGBuQbxtjXS2N-s4RrEvKj3pAuRdh-L0NtSdwae8Z1vYqLAUy2LwnQkORSd_txv82ALswJ_vzj8-ZbIVySxLQLGrLC2dOmgcyPpB63ZfTSPRmDUUNUx3wSO2MNAAkWORIrKQpQdq1Um-edW0detKKN6Dpg-uL2LAEi-4GcE9R8iyWfPpyUDShGOfSUym0yp1064hE20KGVEnVpiUDszGIElQdnFOkfnZSuZXyBKVaRu6TILEJQIUEPhX63IcO_mHPVMwjcJgUHhE6-UE0cBtXVCZFsLgyZ9dJrZPGfuh9hrNqyBGLtU5AhxhF5WwrSBaNsIhwuz2c7s9votpxu5h1ylDc_U4QBoKLJxfFLFvj2EjkVVPPn90rOuvD1h6d6kgj99bUM4rTAP4c7iciwC2eOftBHVYq1Uo-TgCjUG9eYhwQmwLLxUuDcUMvaQlDNuzIuBkq-SDRR1FIXfSp6qZZlYIOaRQeVdu3Yil1T7Fj6MR_9BzNCEnpJRakCRv_4FTaQrsAtE87Qy5ueuQrZZBJZS6ZYEeI42eISYgE7rjr9JrPH79VhPuGlcIR_A0jBd_hnw3KKf9PKwZ0uQsISbqBKy5MICcxWvDeFzCzDmKco0grO84--zId5DtHvj93870e6sQWy_ygOH8lC9o4o9Nq025NOJPcAU7-DtexV99J9EZtjrYYjjq3T86J2TaCsJLsHmT5NPt8zTgGID8xSB6Aq90BuHiC8sra15HSX2hvgPWOMdZILJdyVjjVhejrg9xtmsmpuHikGZkwBpFOqN7xPIH7ivItd1FiQDCx6wHKr_ida5JonbN_E0qvrHvgH8M04kj_Cui3CLRW4WCqwnmfM7SRmGlZPIxES8TnWep_HLOcVeDP8e_4O8Kv60m8mWKK4s1V_Oroa_yCL9N0uUqXhSm09P6EcN49oQA7E2K3Ju8ctcMQ8OLm6ckv5QeS5dvRNvTtbmhCtwmuqPzw_v2L4GyUtYQzUpV4Q_ixMEIsMijf0iKb4LakSvY6LLKF-YlQ2Qc7W5sim6ALNMr6DvLRiZK1k202qaT2WHW2r5vnJ4ovBVfpHSS-ioyyTppv1rYpzc9_AdrhCio)
```
flowchart TD
A([Source texts preparation]):::titleNode---B[[Perl regular expressions, oXygen XML Editor<br/> for converting old HTML without end-tags to XML <br/> for marking collation chunk boundaries in source files]]:::tech
A---C[[<b>XSLT</b><br/> for resequencing margin notes <br/> for organizing text files into 'chunks' for collation <br/> For 'flattening' the markup for collation.]]:::tech

D([Collation of five versions of Frankenstein]):::titleNode---E[[<b>Python</b> <br/> for preparing the tokenizing and normalizing algorithm + instructing CollateX]]:::tech
E---F[[<b>CollateX</b> <br/> Python-based library for locating alignments and divergences in pairwise comparison of text strings<br/> Output XML format of a single file holding information about all five source texts and where they align and diverge from each other.]]:::tech

G([Prepare the Spine and 5 edition files from collation output]):::titleNode---H[[<b>XSLT postCollation pipeline</b><br/> Series of XSLTs: transforms collation XML output into Spine file + 5 edition files]]:::tech
G---I[[<b>Python</b> for Levenshtein edit distance calculations<br/> find the maximum value of all pairwise comparisons at each variant location]]:::tech
I---J[[<b>XSLT</b> Pull data from the Python edit-distance output<br/> Apply to spine file and to create hotspots in the edition files]]:::tech
I---L[[<b>XSLT</b> to prepare the Interactive Variorum Heatmap in SVG]]:::tech
H---K[[<b>XSLT</b> for preparing the data for the interface<br/> Split into letter/chapter-size unit files<br/><b>Transform the spine from XML to JSON</b>]]:::tech
J---K

M([Prepare the Interface]):::titleNode---N[[<b>React + Astro JavaScript</b></br> Pull the XML data into JSON structures for web interface delivery]]:::tech
Y([Sharing project workflow and data]):::titleNode---Z[[<b>git/GitHub</b>, Slack, meetings]]:::collab



A====>D
D====>G
G====>M
A==>Y
D==>Y
G==>Y
M==>Y

classDef titleNode font-size:5rem
classDef tech fill:#d9ead3,font-size:3rem
classDef collab fill:#fed966,font-size:3rem
```
