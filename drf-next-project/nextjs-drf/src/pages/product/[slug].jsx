import { makeStyles } from '@material-ui/styles';
import Header from '../../components/header';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    borderRadius: '0',
  },
  paperImagePreview: {
    paddingTop: 30,
  },
  paperImage: {
    padding: theme.spacing(0),
    borderRadius: '0',
    marginLeft: 25,
    ['@media (max-width:600px)']: {
      marginLeft: -20,
      marginRight: -20,
    },
  },
  paperRight: {
    padding: theme.spacing(0),
    borderRadius: '0',
    paddingLeft: 40,
    paddingTop: 30,
    ['@media (max-width:600px)']: {
      paddingLeft: 0,
      paddingTop: 10,
    },
  },
  img: {
    width: '100%',
  },
}));

function Product({ post, categories }) {
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header data={categories} />
      <Container maxWidth="md">
        <Grid container spacing={0}>
          <Hidden only={['xs', 'sm']}>
            <Grid item sm={1}>
              <Paper className={classes.paperImagePreview} elevation={0}>
                {post.product_image.map((image) => (
                  <div key={image.id}>
                    <Paper className={classes.paperImage} elevation={0}>
                      <img
                        src={image.image}
                        alt={image.alt_text}
                        className={classes.img}
                        width="100%"
                      />
                    </Paper>
                  </div>
                ))}
              </Paper>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paperRight} elevation={0}>
              <img
                src={post.product_image[0].image}
                alt={post.product_image[0].alt_text}
                className={classes.img}
                width="100%"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paperRight} elevation={0}>
              <Box component="h1" fontSize={18} fontWeight="400">
                {post.title}
              </Box>
              <Box component="p" fontSize={22} fontWeight="900" m={0}>
                ${post.regular_price}
              </Box>
              <Box component="p" fontSize={14} m={0}>
                Free Delivery & Return (Ts&Cs apply)
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: 'boots' },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:8000/api/${params.slug}`);
  const post = await res.json();

  const ress = await fetch('http://localhost:8000/api/category');
  const categories = await ress.json();
  return {
    props: {
      post,
      categories,
    },
  };
}

export default Product;
