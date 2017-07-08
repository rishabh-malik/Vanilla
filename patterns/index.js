//creating pattern dictionary
const patternDict=[{
    pattern:'\\b(Hi|Hello|Hey)\\b',
    intent:'Hello'
},{
    pattern:'\\b(Bye|Exit)\\b',
    intent:'Exit'
}];

module.exports=patternDict;