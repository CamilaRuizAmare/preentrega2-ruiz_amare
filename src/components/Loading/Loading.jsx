import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img className={styles.loading} src="../../image-loading.webp" alt="Huellitas de gato" />
            <span className="visually-hidden">Loading...</span>
        </div>
    )
};

export default Loading;