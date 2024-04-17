import  collection from './emojis.json'
import PropTypes from 'prop-types';
const titles = collection.map(emoji => emoji.title)
const symbols = collection.map(emoji => emoji.symbol)
const keywords = collection.map(emoji => emoji.keywords.split(' '))

export default function Emojis({ searchInput }) {
    const filteredEmojis = symbols.filter((emoji, index) => {
        return keywords[index].some(keyword => keyword.includes(searchInput.toLowerCase()));
    });

    const copyToClipboard = (emoji) => {
        navigator.clipboard.writeText(emoji)
        window.alert(`Emoji ${emoji} has been added to your clipboard`)
    }

    return (
        <div>
            {filteredEmojis.map((emoji, index) => 
            <input 
            key={index} 
            value={emoji}
            title={titles[symbols.indexOf(emoji)]}
            onClick={() => {copyToClipboard(emoji)}}
            readOnly
            />
            )}
        </div>
    )
}



Emojis.propTypes = {
    searchInput: PropTypes.string,
}
