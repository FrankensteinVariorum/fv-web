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
