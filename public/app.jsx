
const HeadingItem = props=>{
    const Heading = props.tagType

    return <Heading>{props.headingText}</Heading>
}

const DescriptionItem = props=>{
    const Desc = props.tagType

    return <Desc>{props.descriptionText}</Desc>
}

const SectionItem = props =>
    <section className='item'>
        <HeadingItem
            headingText={props.headingText}
            tagType={props.headingTagType}
        />
        <DescriptionItem
            descriptionText={props.descriptionText}
            tagType={props.descriptionTagType}
        />
    </section>


ReactDOM.render(
    <div className='wrapper'>
        
        <SectionItem
            headingText='HTML'
            headingTagType='h1'
            descriptionText='transform into the DOM'
            descriptionTagType='p'
        />
        <SectionItem
            headingText='HTML2'
            headingTagType='h2'
            descriptionText='transform into the DOM2'
            descriptionTagType='p'
        />
        <SectionItem
            headingText='HTML3'
            headingTagType='h3'
            descriptionText='transform into the DOM3'
            descriptionTagType='p'
        />
    </div>,
    document.getElementById("app")
);